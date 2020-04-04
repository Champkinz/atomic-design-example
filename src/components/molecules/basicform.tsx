import React, { FC, useState, useEffect } from "react";
import Input from "../atoms/input";

const BasicForm: FC<BasicFormProps> = (props: BasicFormProps) => {
  const { onChange } = props;

  const [form, setFormData] = useState({});

  const setSelectedForm = (key: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {
    onChange(form);
  }, [form, onChange]);

  console.log(form);

  return (
    <div>
      {props.structure.map(field => (
        <div key={field.key} className="py-2">
          <Input
            width={350}
            placeholder={field.placeholder}
            onChange={(e: any) => setSelectedForm(field.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export interface BasicFormProps {
  structure: structure[];
  onChange: (data: any) => any;
}

export interface structure {
  key: string;
  placeholder: string;
}

export default BasicForm;
