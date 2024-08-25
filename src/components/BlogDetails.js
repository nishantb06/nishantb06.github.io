import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeMenuMainContent, setActiveMenuMainContent] = useState(null);

    const toggleMenuMainContent = (menu) => {
        setActiveMenuMainContent(activeMenuMainContent === menu ? null : menu);
    };

    const [activeMenuConclusion, setActiveMenuConclusion] = useState(null);

    const toggleMenuConclusion = (menu) => {
        setActiveMenuConclusion(activeMenuConclusion === menu ? null : menu);
    };

    const [activeMenuIntroduction, setActiveMenuIntroduction] = useState(null);

    const toggleMenuIntro = (menu) => {
        setActiveMenuIntroduction(activeMenuIntroduction === menu ? null : menu);
    };

    // this function triggers when the component mounts
    // no need to mention the useEffect anywhere in the html
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/nishantb06/website/blogs/${slug}`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const data = await response.json();
                setBlog(data);
                console.log(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug]);  // when slug changes, this useEffect will run. this is a dependency array

    // Add this style to remove bullet points
    const noBulletStyle = {
        listStyleType: 'none',
        paddingLeft: 0,
        alignItems: 'left',
    };

    const paddingTitle = {
        paddingTop: '0rem',
        paddingBottom: '0rem',
        marginTop: '0rem',
    };

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (   
        <>
            <div className="section pt-4 pb-0">
                <nav className="breadcrumb has-succeeds-separator">
                    <ul className="container is-size-12">
                        <li><a href="" className="has-text-grey"></a></li>
                        <li><a href="/about" className="has-text-grey">Home</a></li>
                        <li><a href="/writing" className="has-text-grey">Blogs</a></li>
                        {blog && <li><a href="" className="is-active">{blog.title}</a></li>}
                    </ul>
                </nav>
            </div>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-2 has-shadow">
                        <aside className="menu">
                            <p className="menu-label">
                            Table of Contents
                            </p>
                            <ul className="menu-list" style={noBulletStyle}>
                            <li>
                                <button 
                                    onClick={() => toggleMenuIntro('manage-team')} 
                                    className={`button is-text ${activeMenuIntroduction === 'manage-team' ? 'is-active' : ''}`}
                                    aria-expanded={activeMenuIntroduction === 'manage-team'}
                                    aria-controls="manage-team-submenu"
                                >
                                    Introduction
                                </button>
                                <ul className={activeMenuIntroduction === 'manage-team' ? '' : 'is-hidden'} style={noBulletStyle}>
                                <li><a href="#subheading1-1">Subheading 1.1</a></li>
                                <li><a href="#subheading1-2">Subheading 1.2</a></li>
                                </ul>
                            </li>
                            <li>
                                <button 
                                    onClick={() => toggleMenuMainContent('manage-team')} 
                                    className={`button is-text ${activeMenuMainContent === 'manage-team' ? 'is-active' : ''}`}
                                    aria-expanded={activeMenuMainContent === 'manage-team'}
                                    aria-controls="manage-team-submenu"
                                >
                                    Main Content
                                </button>
                                <ul className={activeMenuMainContent === 'manage-team' ? '' : 'is-hidden'} style={noBulletStyle}>
                                <li><a href="#subheading2-1">Subheading 2.1</a></li>
                                <li><a href="#subheading2-2">Subheading 2.2</a></li>
                                </ul>
                            </li>
                            <li>
                                <button 
                                    onClick={() => toggleMenuConclusion('manage-team')} 
                                    className={`button is-text ${activeMenuConclusion === 'manage-team' ? 'is-active' : ''}`}
                                    aria-expanded={activeMenuConclusion === 'manage-team'}
                                    aria-controls="manage-team-submenu"
                                >
                                    Conclusion
                                </button>
                                <ul className={activeMenuConclusion === 'manage-team' ? '' : 'is-hidden'} style={noBulletStyle}>
                                <li><a href="#subheading3-1">Subheading 3.1</a></li>
                                <li><a href="#subheading3-2">Subheading 3.2</a></li>
                                </ul>
                            </li>
                            </ul>
                        </aside>
                        </div>
                        <div className="column is-10">
                            <p className="is-size-5">{blog.date} </p>
                            <h1 className="title is-1 pb-0 mb-0" style={paddingTitle}>
                                {blog.title}
                            </h1>
                            <p className="subtitle is-3" style={paddingTitle}>
                                {blog.subtitle}
                            </p>
                            <div className="tags">
                                <a className="tag is-black">One</a>
                                <a className="tag is-rounded">Two</a>
                                <a className="tag is-hoverable" href="#">Three</a>
                            </div>
                            <div className="pb-4">
                            </div>
                            <p className="title mb-1">Introduction</p>
                            <p class="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde, ad obcaecati perferendis sequi enim saepe eaque. Fuga totam placeat, possimus ducimus suscipit eligendi porro, alias, rerum voluptatem illum excepturi dicta aperiam sint! Illo tenetur sit reprehenderit, saepe quod, aspernatur voluptates quibusdam ipsam, modi deserunt reiciendis eius ad placeat quaerat! Sapiente ad quae sed sit molestiae praesentium! Amet modi adipisci quidem iure fugit ad voluptatem itaque repudiandae temporibus quod pariatur, delectus sequi neque deserunt qui numquam eos saepe facere voluptas aliquid perspiciatis accusamus sit! Asperiores atque molestias illo mollitia quasi. Deserunt corporis molestias aspernatur obcaecati debitis officia mollitia, corrupti itaque totam ratione aperiam error magnam in aut suscipit sapiente ducimus tempore laudantium illum. Nostrum quas reprehenderit nobis adipisci aliquid, sint repellendus! Officiis, debitis magni quas nulla ipsam cupiditate consequatur repellat nihil! Modi, assumenda. Dicta, expedita itaque minima autem aut, voluptas iusto deleniti repellat qui quaerat voluptate quos repellendus libero maxime alias quidem dolorem, facere provident laboriosam soluta ab saepe quas. Eaque amet, inventore aliquid laboriosam enim soluta sed libero mollitia, laudantium culpa labore cupiditate. Expedita minus voluptatibus, quidem itaque, eligendi necessitatibus quis commodi rerum incidunt ut ducimus, porro ratione nisi natus? Quasi vel non aliquam et vero enim fugit, saepe repellendus aut optio illo impedit provident officiis. Expedita iusto voluptates voluptas sit cupiditate, impedit quo mollitia deleniti, necessitatibus molestiae repudiandae consectetur maiores reprehenderit dolorem ullam eum aliquam soluta architecto? Autem ex incidunt minus saepe, nisi, ducimus ullam, quae quo sed iusto laudantium rem corrupti? Consequatur pariatur itaque nostrum magnam, molestias veniam id laboriosam corrupti nisi quis inventore aspernatur rerum minus alias nobis quasi blanditiis suscipit. Pariatur consectetur eos adipisci commodi. Cumque nulla ut laboriosam magni ab natus unde aut possimus? Perferendis, tenetur eligendi voluptas quas esse, aperiam dolorem excepturi, ad commodi provident vel incidunt laboriosam fuga amet. Explicabo eligendi dolorum voluptate nemo nam, modi, quidem sunt consequatur sapiente, repellat placeat exercitationem error ipsam excepturi aliquam atque necessitatibus deserunt ipsa sit reiciendis eius tenetur! Eos, illum! Dolor natus quas unde at error laboriosam laborum quam accusantium. Facilis culpa impedit odio nihil, itaque, alias consequatur nam error repellat laboriosam tempora at consectetur officia quia laudantium nobis, reprehenderit voluptas tenetur deleniti dicta vitae placeat. Sint dolorum illo esse in dolor vero magnam delectus quae deserunt laboriosam? Quos amet adipisci, deserunt cumque accusantium temporibus ullam nemo optio architecto reiciendis provident necessitatibus, quibusdam blanditiis repellendus a id distinctio expedita rerum ad magnam. Neque placeat ut odit ducimus, consectetur reiciendis animi voluptatem omnis deleniti assumenda accusantium at a iste debitis quae dolore voluptas eaque alias expedita minima architecto id. Et omnis repudiandae praesentium non corporis dignissimos recusandae at error quae perferendis eius illo expedita obcaecati nihil, repellendus, nobis ipsum necessitatibus dolore soluta! Atque incidunt, magni voluptates ducimus corporis perferendis tempore sit totam id eos, eaque quam consequatur pariatur asperiores quas adipisci doloremque amet dolorum quaerat autem natus esse! Dolor ducimus eveniet et voluptatibus exercitationem atque quibusdam, expedita incidunt minima eum, tempora dolorem totam, quis vel assumenda? Commodi dolor dolorem, optio explicabo, et a quo soluta nulla recusandae qui fuga repellendus porro consectetur repudiandae expedita vel. Officia voluptates quos libero eaque architecto repudiandae consequuntur saepe atque asperiores vero placeat earum non dolores numquam, impedit excepturi? Deserunt rem optio voluptas ipsum veniam blanditiis itaque repudiandae, quae quia nemo iure placeat aut. Animi esse placeat cumque beatae est obcaecati repudiandae ducimus quidem culpa voluptatem tempore repellendus, id, aspernatur fugit, delectus fugiat quibusdam? Soluta iusto inventore ab ea nemo laborum tempora provident tempore aliquam. Qui voluptatibus soluta consequuntur delectus accusamus doloribus voluptate magnam non sit, fugiat dignissimos, vel, illo tenetur eos beatae quod? Repellat aspernatur asperiores alias. Quaerat ipsam similique error eligendi, hic id dolorem porro ipsum quod, sed, animi quibusdam rerum magnam sit blanditiis ullam beatae obcaecati aspernatur. Aperiam laboriosam a laborum commodi magni animi nobis consequuntur dolor placeat quibusdam. Dignissimos corporis itaque qui ipsa ex perspiciatis corrupti consequuntur voluptas possimus odit! Quo fugiat provident sit velit et quia repellat porro molestiae magnam, aliquam culpa rem ullam, deleniti hic! Consequuntur perferendis dolor quas nostrum delectus earum error inventore eveniet voluptatum autem. Molestiae quidem a optio tenetur eos, ducimus aliquid dolorem magnam error vero ex corporis, reprehenderit vitae nihil nulla cupiditate. Qui cumque at assumenda praesentium. Fugit id vel laborum aliquid dicta, officiis vitae sed maxime, quis totam laudantium recusandae magnam voluptatum amet reprehenderit quibusdam. Harum aut veniam consequatur, fugit itaque enim nesciunt voluptatibus voluptatem sapiente dolorum iste cum. Nulla natus recusandae maiores ipsa facere at voluptate ab pariatur suscipit a. Saepe placeat aperiam dignissimos adipisci, ex iste! Dolores accusantium labore maiores, rem amet pariatur! Harum omnis repellendus sint vitae totam eveniet provident ut sapiente velit illum placeat quam ad libero officia, dicta perspiciatis dolor accusamus assumenda aut corrupti inventore ratione possimus. Velit eum molestias voluptatibus fugiat sapiente quisquam repudiandae, dolorum maxime corporis dolorem quas, doloremque, pariatur ab odit odio sit excepturi voluptate impedit. Consectetur omnis sequi deleniti sapiente, excepturi deserunt esse in ratione debitis, illo hic, vitae modi aliquid temporibus accusamus obcaecati. Eum omnis, similique saepe voluptatem officia illum minima ab doloremque porro earum a enim ea temporibus ipsam vitae sint animi exercitationem consequuntur expedita veniam nam dolor? Eveniet impedit laborum totam neque aperiam omnis optio, adipisci recusandae unde saepe error at blanditiis asperiores suscipit sunt porro quis itaque. Expedita, voluptate excepturi cumque earum quibusdam dolores magni quo similique omnis temporibus modi blanditiis accusantium delectus ipsum dolorum soluta velit assumenda eligendi, odio deleniti. Cum, voluptates. Fuga et quos asperiores a molestias rerum ipsum! Placeat at nostrum corrupti architecto debitis saepe inventore, vel sequi obcaecati explicabo reiciendis exercitationem harum vitae soluta asperiores possimus qui quia eos officiis repudiandae enim! Nam sequi odit dolore, unde animi debitis culpa sunt quidem libero voluptates at non enim quae sapiente cumque dicta adipisci corporis distinctio ex cupiditate eveniet aut consectetur! Repellat deleniti numquam perferendis corrupti velit non laboriosam magnam voluptatibus suscipit vel voluptas id ducimus illum incidunt esse mollitia ab tenetur, consequatur ea. Error optio molestias minus illum dolores dolore ducimus blanditiis voluptatem. Laborum possimus temporibus vitae, est eum in sint a iste aperiam.</p>
                            <h2 className="title">Section 2</h2>
                            <h3 className="title" id="subheading2-1">Subheading 2.1</h3>
                            <p className="pb-4">{blog.content.mainContent[0]}</p>
                            <h3 className="title" id="subheading2-2">Subheading 2.2</h3>
                            <p className="pb-4">
                                {blog.content.mainContent[-1]}
                            </p>
                            <article className="message">
                                <div className="message-header">
                                    <p>Hello World</p>
                                    <button className="delete" aria-label="delete"></button>
                                </div>
                                <div className="message-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                                    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
                                    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                                    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                                    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                </div>
                            </article>
                            <article className="message is-warning">
                                <div className="message-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                                    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                                    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
                                    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                                    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                                    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

 
export default BlogDetails;