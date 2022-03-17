export default function Icon({ name }) {
    return (
        <i
            className={`${name} h-6 w-6 text-white`}
            style={{ width: '1.5rem' }}
            aria-hidden="true"
        ></i>
    );
}
