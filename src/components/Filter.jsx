export const Filter = (props)=>{
    let filterData = props.filterData;
    return (
        <div>
        {
           filterData.map((data)=>(
              <button key={data.id}>
                {data.title}
              </button>
           ))
        }
        </div>
    )
}