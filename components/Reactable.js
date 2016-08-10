var Table = Reactable.Table;
ReactDOM.render(
    <Table className="table" data={[
        { Name: 'Griffin Smith', Age: 18 },
        { Age: 23,  Name: 'Lee Salminen' },
        { Age: 28, Position: 'Developer' },
    ]} />,
    document.getElementById('table')
);
