import './Actor.css';

function ActorComponent({data}) {
    return (
        <div className='actor'>
            <div className='actor-img'>
                <img src={data.img} />
            </div>
            <div className='actor-content'>
                <h3 id='infor-name'>{data.name}</h3>
                <h4 id='infor'>{data.school}</h4>
                <h4 id='infor'>{data.fb}</h4>
                <h4 id='infor'>{data.contact}</h4>
                <h4 id='infor'>{data.nickname}</h4>
            </div>
            <div className='actor-more'>
                For more →
            </div>
        </div>
    );
}

export default ActorComponent;