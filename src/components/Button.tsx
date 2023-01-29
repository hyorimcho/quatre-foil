import styled from "styled-components";

const Button = ({
  primary,
  children,
  onClick,
}: {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Btn primary={primary as boolean} type="submit" onClick={onClick}>
      {children}
    </Btn>
  );
};
export default Button;

const Btn = styled.button<{ primary: boolean }>`
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid
    ${(props) => (props.primary ? "transparent" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.primary ? "var(--primary-color)" : "var(--white)"};
  color: ${(props) =>
    props.primary ? "var(--white)" : "var(--primary-color)"};
`;