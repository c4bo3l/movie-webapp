import { ReactNode } from "react";
import { Col, ColProps } from "react-bootstrap";

interface MovieContainerProps extends ColProps {
  children: ReactNode
}
export const MovieContainer = ({children, ...rest}: MovieContainerProps) => {
  return (
    <Col
      {...rest}
      xs={12}
      md={6}
      lg={3}
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </Col>
  );
};