const FormField = ({ children, error }) => {
    return (
        <div className={`form-input ${error ? 'form-error' : ''}`} >
            { children }
            {error ? <div className="error">{error}</div> : ''}
        </div>
    );
}

export default FormField;