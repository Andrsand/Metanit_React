function Hello(props) {
    return <div>
        <p>Имя: {props.name}</p>
        <p>Возраст: {props.age}</p>
    </div>;
}
ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <Hello name="Tom" age="33" />
    );
