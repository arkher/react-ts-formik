import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FieldContainer,
  Header,
  Snackbar,
} from '../../components';
import { useFormik } from 'formik';
import ApiError from '../../api/core/ApiError';
import validationSchema from './validationSchema';
import Name from './fields/Name';
import Cpf from './fields/Cpf';
import Email from './fields/Email';
import BirthDay from './fields/BirthDay';
import CellPhone from './fields/CellPhone';
import GrossIncome from './fields/GrossIncome';
import ProfessionalClass from './fields/ProfessionalClass';
import PostalCode from './fields/PostalCode';
import DeviceBrand from './fields/DeviceBrand';
import DeviceModel from './fields/DeviceModel';
import OsVersion from './fields/OsVersion';
import Terms from './fields/Terms';
import NonPoliticallyExposedPerson from './fields/NonPoliticallyExposedPerson';
import { GetDeviceInfoService, RegisterBffService } from '../../services';
import { AxiosError } from 'axios';
import { ERROR_CODES } from '../../constants';

function BasicData() {
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      email: '',
      birthDay: '',
      cellPhone: '',
      grossIncome: '',
      professionalClassId: '',
      deviceBrand: '',
      deviceModel: '',
      osVersion: '',
      postalCode: '',
      terms: true,
      nonPoliticallyExposedPerson: true,
    },
    onSubmit: (values, actions) => {
      registerBff(values, actions.resetForm, utmSource);
    },
    validationSchema,
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    getFieldProps,
    setFieldValue,
    setSubmitting,
  } = formik;

  const [toastErrorMessage, setToastErrorMessage] = useState('');
  const [toastSuccess, setToastSuccess] = useState<boolean | undefined>(
    undefined
  );
  const [utmSource, setUtmSource] = useState('naoenviado');
  const [showDeviceFields, setShowDeviceFields] = useState(false);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const utmSource = urlSearchParams.get('utm_source');
    if (utmSource) {
      setUtmSource(utmSource);
    }
    const getDeviceInfo = async () => {
      try {
        const response = await GetDeviceInfoService.get();
        if (response && response.isSuccess && response.data.exists) {
          setFieldValue('deviceModel', response.data.model);
          setFieldValue('deviceBrand', response.data.brand);
          setFieldValue('osVersion', response.data.osVersion);
        } else {
          setShowDeviceFields(true);
        }
      } catch (e) {
        setShowDeviceFields(true);
        console.error(e);
      }
    };
    getDeviceInfo();
  }, []);

  const registerBff = async (
    data: IFormData,
    resetForm: () => void,
    utmSource: string
  ) => {
    try {
      setSubmitting(true);
      const response = await RegisterBffService.post(data, utmSource);
      if (response.success) {
        resetForm();
        setToastSuccess(true);
        window.location.href = response.redirectUrl;
      }
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        const errorMessage = error.message;
        setToastErrorMessage(errorMessage);
      }
      if (error instanceof AxiosError) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors &&
          error.response.data.errors.length > 0
        ) {
          setToastErrorMessage(
            ERROR_CODES[error.response.data.errors[0].name as string]
          );
        } else {
          setToastErrorMessage('Ocorreu um erro ao realizar o cadastro.');
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseToast = () => {
    if (toastSuccess) {
      setToastSuccess(undefined);
    }
    if (toastErrorMessage) {
      setToastErrorMessage('');
    }
  };
  return (
    <Container>
      <Header />

      <form onSubmit={formik.handleSubmit}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 16,
          }}
        >
          <Name
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('name')}
          />
          <Cpf
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('cpf')}
          />
          <Email
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('email')}
          />
          <BirthDay
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('birthDay')}
          />
          <CellPhone
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('cellPhone')}
          />
          <GrossIncome
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('grossIncome')}
          />
          <ProfessionalClass
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('professionalClassId')}
          />
          <PostalCode
            values={values}
            errors={errors}
            touched={touched}
            {...getFieldProps('postalCode')}
          />

          {showDeviceFields && (
            <>
              <DeviceBrand
                values={values}
                errors={errors}
                touched={touched}
                setFieldValue={setFieldValue}
                {...getFieldProps('deviceBrand')}
              />
              <DeviceModel
                brand={values.deviceBrand}
                values={values}
                errors={errors}
                touched={touched}
                {...getFieldProps('deviceModel')}
              />
              <OsVersion
                brand={values.deviceBrand}
                values={values}
                errors={errors}
                touched={touched}
                {...getFieldProps('osVersion')}
              />
            </>
          )}
          <Box
            sx={{
              flexDirection: 'column',
              height: '100%',
              marginTop: 2,
              paddingBottom: 4,
            }}
          >
            <Terms
              values={values}
              errors={errors}
              touched={touched}
              {...getFieldProps('terms')}
            />
          </Box>
          <FieldContainer>
            <Button
              variant="contained"
              type="submit"
              isLoading={isSubmitting}
              style={{ width: '100%', height: 48 }}
            >
              Finalizar cadastro
            </Button>
          </FieldContainer>
        </Box>

        <Snackbar
          open={!!toastErrorMessage}
          message={toastErrorMessage}
          severity="error"
          onClose={handleCloseToast}
          autoHideDuration={
            toastErrorMessage !== ERROR_CODES.CheckAlphaRejectedError
              ? 5000
              : undefined
          }
        />
        <Snackbar
          open={toastSuccess}
          message={'Cadastro concluído com sucesso!'}
          severity="success"
          onClose={handleCloseToast}
        />
      </form>
    </Container>
  );
}

export default BasicData;
