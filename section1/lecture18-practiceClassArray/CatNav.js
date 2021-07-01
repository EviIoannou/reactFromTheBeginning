// change this Component to a class!
// function CatNav(props){
//     // get data from props and use map to build an array of <li>
//     // ... code goes here
//     return(
//         <div>
//             {/* Your Code Here */}
//         </div>
//     )
// }


class CatNav extends React.Component {
    constructor(){
        super();
    }

    render() {
        let navItems = this.props.data.map((item, i) => {
            return(
                <li key={i} className="cat-link left valign-wrapper" >
                    <i className="material-icons">{item.icon}</i>{item.title}
                </li>
            )
        }) 
        
        return(
            <div className="row">
                <ul className="cat-nav center-align">
                    {navItems}
                </ul>
            </div>
        )
    }
}