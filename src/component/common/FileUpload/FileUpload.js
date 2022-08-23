import React from "react";
import Form from "react-bootstrap/Form";

function FileUpload({
  id,
  label,
  helpText,
  placeholder,
  value,
  onChange,
  style,
  type = "file",
  required,
  maxLength,
  error,
  children,
  ref,
  className,
  accept,
}) {
  return (
    <Form.Group style={style}>
      {label && <Form.Label>{label}</Form.Label>}
      <div className={className}>
        <Form.Control
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required || false}
          maxLength={maxLength || 999999999999}
          isInvalid={error}
          ref={ref}
          accept={accept}
        />
        {children}
      </div>
      <Form.Text className="text-muted" color={"red"}>
        {error}
      </Form.Text>
    </Form.Group>
  );
}
export default FileUpload;
