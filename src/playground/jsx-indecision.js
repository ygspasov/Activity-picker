console.log('App.js is running')

const app={
    title:'Yavor\'s app',
    subtitle:'My app\'s subtitle',
    options: []
}

const onFormSubmit=(e)=>{
    e.preventDefault();

    const option =e.target.elements.option.value
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
    
};

const onMakeDecision=(e)=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option =app.options[randomNum];
    alert(option);
}

const removeAll = ()=>{
    app.options=[];
    render();
}


const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle&&<p>{app.subtitle}</p>}
            <p>{(app.options&&(app.options.length>0) ? 'Here are your options' :'No options')}</p>
           
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
            {
                app.options.map(option=><li key={option}>{option}</li>)
            }
            </ol>
            
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot)
}

const appRoot = document.getElementById('app');

render();

