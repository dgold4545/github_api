import { Field, Form, Formik } from "formik";

export default function SearchForm({ onSearch }) {
  const handleSubmit = (values, actions) => {
    onSearch(values.tag);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ tag: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="tag" />
        <button type="submit">Search user by name/tag</button>
      </Form>
    </Formik>
  );
}
