/** @format */

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";



// create unique id key for each donor
// using curent date time value converted to base-36
function getUID() {
  return Date.now().toString();
}

const Form = ({ handleClick }) => {
  const [indx, setIndx] = useState(0);
  const formik = useFormik({
    initialValues: {
      name: "",
      donationType: "",
      amount: "",
      date: "",
      id: "",
      index: indx,
    },
    onSubmit: (values) => {
      values.id = getUID();
      console.log(values.id);
      handleClick(values);
      setIndx(indx + 1);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex py="3rem" gap="2rem" direction="column" align="center">
        <Heading>Donation Form</Heading>
        <Stack w="60vw" direction="column" spacing="2rem">
          <FormControl>
            <FormLabel htmlFor="name">Donor's name</FormLabel>
            <Input
              variant="filled"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="donationType">Type of donation</FormLabel>
            <Input
              variant="filled"
              id="donationType"
              name="donationType"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.donationType}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="amount">Amount</FormLabel>
            <Input
              type="number"
              variant="filled"
              id="amount"
              name="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              variant="filled"
              id="date"
              name="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              isRequired
            />
          </FormControl>
        </Stack>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
