import react from 'react';
import style from './UserPosts.module.css';
import logo from './logo.png';

function allPosts() {
    return [
        { id: 0, name: "Elon Musk", content: "Persistence is very important.\nYou should not give up unless you\n are forced to give up." },
        { id: 1, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"\n- Michael Scott" },
        { id: 2, name: "Nassim Nicholas Taleb", content: "Things always become obvious\n after the fact" },
        { id: 3, name: "Neil deGrasse Tyson", content: "If each dead person became a\n ghost, there’d be more than\n 100-billion ofthem haunting \nus all. Creepy, but cool." },
        { id: 4, name: "Walter White", content: "I am the one who knocks" },
        { id: 5, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"" },
        { id: 6, name: "Neil deGrasse Tyson", content: "If each dead person became a ghost,\n there’d be more than 100-billion of\nthem haunting us all. Creepy, but cool." },
        { id: 7, name: "Walter White", content: "I am the one who knocks" }
    ];
}

function Post(props) {
    const post = props.post;
    const content = post.content.split('\n').map((line, index) => <p key={index}>{line}</p>) 

    return (
        <div className={style.Post}>
            <div className={style.Header}>
                <div className={style.Picture}></div>
                <div className={style.Name}>{post.name}</div>
            </div>
            <div className={style.Content}>
                {content}
            </div>
        </div>
    );
}

function UserPosts() {
    const content = allPosts();

    return (
        <div className={style.UserPosts}>
            <div className={style.Instructions}> 
                <p className={style.Arrow}>←</p>
                <img src={logo} alt="logo"/><br />
                React Side Panel<br />
                Made easy<br />
            </div>
            { content.map(post => <Post key={post.id} post={post} />)}

            <div className={style.InstructionsBottom}> 
                Swipe →
            </div>
        </div>
    );
}

export default UserPosts;