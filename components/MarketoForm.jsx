import UseMarketo from "../components/UseMarketo";

function Form(props) {
  const { baseUrl, munchkinId, formId } = props;
  if (!(baseUrl && munchkinId && formId)) return "Fill the fields and a form should appear";
  UseMarketo(props);
  return <form id={`mktoForm_${formId}`} />;
}

function MarketoForm() {
  const inputs = ({
    baseUrl: "//pages.croner.co.uk",
    munchkinId: "463-YBC-525",
    formId: "2476",
  });

  return (
    <>
      <Form {...inputs} />
    </>
  );
}

export default MarketoForm;