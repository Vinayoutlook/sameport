import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Tiles = () => {

    const arr = [
        {
            name:'Group-1',
            footer:'Click',
            link:'https://sqa.nexus.enpdata.guardanthealth.com/0191b192-7e48-7519-b26c-e5f9f589de1a/',
            img:'/assets/cbio.png'
        },
        {
            name:'Group-2',
            footer:'Click',
            link:'https://sqa.nexus.enpdata.guardanthealth.com/0191b192-7e48-787a-afa2-85d11a1cecf9/',
            img:'/assets/cbio.png'
        }
    ];

    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <div className="flex-1 h-dvh p-12">
                    <section className=" w-full h-[100%] m-auto">
                        <div className="grid grid-cols-10 md:grid-cols-10 sm:grid-cols-6 gap-4">
                        {
                            arr && arr.map((item) => {
                                return <div className="w-full chiclet--container text-center">
                                    <a className="chiclet" href={item?.link} target="_blank" rel="noreferrer">
                                        <article className="chiclet-article">
                                            <section className="chiclet-header py-8">
                                                <img src={item?.img} />
                                            </section>
                                            <footer className="chiclet-footer mt-4 p-2">
                                                {item?.name}
                                            </footer>
                                        </article>
                                    </a>
                                </div>
                            })
                        }
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Tiles;