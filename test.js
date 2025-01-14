import React from 'react';
import {
  Alert,
  Button,
  DateInput,
  Flex,
  Form,
  Input,
  Link,
  NumberInput,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
  Select,
  StepIndicator,
  Text,
  TextArea,
  hubspot,
} from '@hubspot/ui-extensions';

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ actions }) => (
  <FormMultistep actions={actions} />
));

// Define the FormSimple component.
const FormMultistep = ({ actions }) => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formStep, setFormStep] = React.useState(0);

  return (
    <></>
  );
};
