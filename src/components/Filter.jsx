export const Filter = (props)=>{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterhandler(title){
        setCategory(title);
    }
    return (
        <div>
        {
           filterData.map((data)=>(
              <button key={data.id} onClick={()=>filterhandler(data.title)}>
                {data.title}
              </button>
           ))
        }
        </div>
    )
}