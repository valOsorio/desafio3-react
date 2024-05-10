const Alert = ({ msg, color }) => (
  <div className={`alert alert-${color} text-center`} role='alert'>
    {msg}
  </div>
)

export default Alert
