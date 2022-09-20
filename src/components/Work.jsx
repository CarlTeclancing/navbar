import book from '../assets/icon-text.svg'
import ai from '../assets/icon-preview.svg'
import blacklist from '../assets/icon-blacklist.svg'

export default function Work(){
    return(
        <div className="work">
            <h2>Supercharge your workflow</h2>
            <p>we've got the tools to boost your productivity.</p>
            <div className="same-hold">
                <div className="same">
                    <img src={blacklist} alt="" />
                    <h3>Create blacklists</h3>
                    <p>Ensure sensitive information never makes its way to your clipboard excluding certain sources</p>
                </div>
                <div className="same">
                    <img src={book} alt="" />
                    <h3>Plain text snippets</h3>
                    <p>Remove unwanted formatting from copied text for a consistent look</p>
                </div>
                <div className="same">
                    <img src={ai} alt="" />
                    <h3>Neak preview</h3>
                    <p>Quick preview of all snippets on your cclipboard for easy access.</p>
                </div>
            </div>
        </div>
    )
}