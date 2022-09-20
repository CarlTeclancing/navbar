import desktop from '../assets/image-computer.png'

function Bio(){
    return(
        <>
            <div className="bio">
                <h2>Keep track of your sniippets</h2>
                <p>
                    Clipoard instanly stores any items you copy in the cloud, meaning you can access <br/>
                 your snippets immediately on all your devices. Our Mac and iOS app will help you <br/>
                 organize everything
                </p>
            </div>
            <div className="quick-sec">
                <img className='img-2' src={desktop} alt="" />
                <div className="right-1">
                    <h3>Quick Search</h3>
                    <p>Easily search your snippets by content,  <br/>
                        category, web address, application and more.
                    </p>
                    <h3>iCloud Sync</h3>
                    <p>instanly saves and syncs snippets across all <br/> your devices.</p>
                    <h3>Complete History</h3>
                    <p>Retrieve any snippets from the first moment <br/> you started using the app.</p>
                </div>
            </div>
        
        </>
    )
}

export default Bio