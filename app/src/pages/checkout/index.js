import { Field, Form, Formik } from "formik";
import React from "react";
import InputMask from "react-input-mask";
import * as yup from "yup";
import FinalCart from "../../components/FinalCart";
import Header from "../../components/Header";

const Schema = yup.object().shape({
  firstName: yup.string().required(),
  cpf: yup.number().required(),
  celular: yup.number(),
  password: yup.string().required(),
  cep: yup.number().required(),
  endereco: yup.string().required(),
  cidade: yup.string().required(),
  estado: yup.string().required(),
});

const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-wrap lg:flex-row lg:gap-6 items-center justify-center">
      <Header />

      <div className="flex items-center justify-center p-8 flex-col">
        <h2 className="font-light mt-10 text-2xl text-green-500">
          Finalizar Compra
        </h2>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <Formik
                validationSchema={Schema}
                initialValues={{
                  firstName: "",
                  cpf: "",
                  celular: "",
                  password: "",
                  cep: "",
                  endereco: "",
                  cidade: "",
                  estado: "",
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div>
                      <label
                        class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        htmlFor="firstName"
                      >
                        Nome Completo
                      </label>
                      <Field
                        class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="firstName"
                        name="firstName"
                        placeholder="Seu nome"
                      />
                      {errors.firstName && touched.firstName ? (
                        <span className="font-bold text-red-600">
                          {errors.firstName}
                        </span>
                      ) : (
                        ""
                      )}
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-white  text-xs font-bold mb-2"
                            for="grid-first-name"
                          >
                            CPF
                          </label>
                          <InputMask
                            class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            mask="999-999-999-99"
                          />
                          {errors.cpf && touched.cpf ? (
                            <span className="font-bold text-red-600">
                              {errors.cpf}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                          <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-last-name"
                          >
                            CELULAR
                          </label>
                          <InputMask
                            class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="celular"
                            name="celular"
                            placeholder="Celular"
                            mask="(99) 99 99999-9999"
                          />
                          {errors.celular && touched.celular ? (
                            <span className="font-bold text-red-600">
                              {errors.celular}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                          for="password"
                        >
                          Password
                        </label>
                        <Field
                          class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="password"
                          name="password"
                          type="password"
                          placeholder="******************"
                        />
                        {errors.password && touched.password ? (
                          <span className="font-bold text-red-600">
                            {errors.password}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                          for="cep"
                        >
                          CEP
                        </label>
                        <Field
                          class="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="cep"
                          name="cep"
                          type="number"
                          placeholder="Cep"
                        />
                        {errors.cep && touched.cep ? (
                          <span className="font-bold text-red-600">
                            {errors.cep}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                          for="endereco"
                        >
                          ENDEREÇO
                        </label>
                        <Field
                          class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="endereco"
                          name="endereco"
                          type="text"
                          placeholder="Endereço"
                        />

                        {errors.endereco && touched.endereco ? (
                          <span className="font-bold text-red-600">
                            {errors.endereco}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                          for="cidade"
                        >
                          CIDADE
                        </label>
                        <Field
                          class="appearance-none block w-full bg-gray-200  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="cidade"
                          name="cidade"
                          type="text"
                          placeholder="Cidade"
                        />
                        {errors.cidade && touched.cidade ? (
                          <span className="font-bold text-red-600">
                            {errors.cidade}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                          for="estado"
                        >
                          ESTADO
                        </label>
                        <Field
                          class="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="estado"
                          name="estado"
                          type="text"
                          placeholder="Estado"
                        />
                        {errors.estado && touched.estado ? (
                          <span className="font-bold text-red-600">
                            {errors.estado}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </form>
      </div>
      <FinalCart />
    </div>
  );
};

export default Checkout;
