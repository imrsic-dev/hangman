import React, { useState } from "react";
import { useFormValidator } from "../../hooks/useFormValidator";
import FlexContainer from "../Layout/FlexContainer/FlexContainer.component";
import Button from "../UI/Button/Button";
import {
  FormStyled,
  Label,
  Input,
  FormErrorMessage,
} from "./UsernameForm.style";

const UsernameForm = () => {
  const [form, setForm] = useState({
    username: "",
  });

  const { errors, validateForm, onBlurField } = useFormValidator(form);

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <FormStyled onSubmit={onSubmitForm} autoComplete="off">
      <FlexContainer flexDirection="column">
        <Label htmlFor="username-input-field">Enter your username: </Label>
        <Input
          autoComplete="off"
          type="search"
          id="username-input-field"
          name="username"
          value={form.username}
          onChange={onUpdateField}
          onBlur={onBlurField}
        />
        <FormErrorMessage isError={!errors?.username?.isValid}>
          Must be between 3 and 7 characters
        </FormErrorMessage>
        <Button type="submit">Play!</Button>
      </FlexContainer>
    </FormStyled>
  );
};

export default UsernameForm;