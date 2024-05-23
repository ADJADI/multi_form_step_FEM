import * as Yup from "yup";
const validationSchemaStep1 = Yup.object().shape({
  firstName: Yup.string().required("this field is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("this field is required"),
  phoneNumber: Yup.string().required("this field is required"),
});

const validationSchemaStep2 = Yup.object().shape({
  plan: Yup.string().required("this field is required"),
});

const validationSchemaStep3 = Yup.object().shape({
  services: Yup.object().test({
    name: "at-least-one-service",
    message: "Please select at least one service",
    test: (value) => {
      const serviceNames = Object.keys(value);
      return serviceNames.some((name) => value[name]);
    },
  }),
});

export { validationSchemaStep1, validationSchemaStep2, validationSchemaStep3 };
