import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable></CabinTable>
        <Button onClick={() => setShowForm((currentState) => !currentState)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm></CreateCabinForm>}
      </Row>
    </>
  );
}

export default Cabins;
