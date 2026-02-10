





export default function OutputArea({ content }) {
    return (
        <div>
            <p>{content ? content : "Default"}</p>
        </div>
    );
}