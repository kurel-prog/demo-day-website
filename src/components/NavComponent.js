import './NavComponent.css';

function NavComponent({setState, url, data}) {
    return (
        <>
            {
                url == './AboutUs' ?
                    <a onClick={() => {setState(0)}} className='nav-name'>{
                        data.name
                    }</a> :
                    <a onClick={() => {setState(1)}} className='nav-name'>{
                        data.name
                    }</a>
            }
        </>
    )
}

export default NavComponent;
