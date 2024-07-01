

const UserEntrySection = ({ label, placeholder }) => {
    return (
        <div>
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    );
}

export default UserEntrySection;