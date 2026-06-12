import useReveal from "../hooks/useReveal";

export default function RevealOnScroll({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useReveal();
  const style = delay
    ? { transitionDelay: `${delay}ms`, ...(rest.style || {}) }
    : rest.style;
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      {...rest}
      style={style}
    >
      {children}
    </Tag>
  );
}
