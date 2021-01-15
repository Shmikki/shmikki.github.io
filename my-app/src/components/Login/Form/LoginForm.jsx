import React from "react";
import  "./LoginForm.module.css";
import styled from "styled-components";
import validator from "validator";
import {Form} from "../../common/FormControls/FormControls";
import {Input} from "../../common/FormControls/Input/Input";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  margin-bottom: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Button = styled.button`
  color: #5b7cb5;
  font-size: 1em;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid #5b7cb5;
  border-radius: 3px;
  display: block;
  width: 100%;
`;




export const LoginForm = (props) => (
    <Form onSubmit={(values) => props.logIn(values.Email,values.password,values.RememberMe)}>
        {props => (
            <FormWrapper>
                <Group>
                    <Label>Username</Label>
                    <Input
                        name="Email"
                        placeholder="Email"
                        validate={v =>
                            !validator.isEmail(v || "") && "Please Enter a Valid Email!"
                        }
                    />
                </Group>
                <Group>
                    <Label>Password</Label>
                    <Input name="password" type="password" placeholder="Password" validate={v => !(v || "") && "Please Enter a valid Password"} />
                </Group>
                <Group>
                    <Label>Remember me</Label>
                    <input type="checkbox" name="RememberMe" value="true" />
                </Group>
                    <Button  type="submit" primary>Login</Button>
            </FormWrapper>
        )}
    </Form>
)
