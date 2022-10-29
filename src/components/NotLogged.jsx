import "./ExploreContainer.css";
import { logoFacebook, logoGoogle, logoTwitter, logoWindows } from "ionicons/icons";
import { IonIcon, useIonViewWillEnter } from "@ionic/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Storage } from "@ionic/storage";

function NotLogged(props) {
    const [registrazione, setRegistrazione] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [esito, setEsito] = useState([]);

    const abilitaRegistrazione = () => {
        setRegistrazione(true);
    };

    const disabilitaRegistrazione = () => {
        setRegistrazione(false);
    };

    //useIonViewWillEnter(async () => {});

    let url = "https://api.sharetubeaziende.com/login/";

    let urlR = "https://api.sharetubeaziende.com/signup/";

    let invisible="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 hidden"

    let visibile="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    
    const [alert,setAlert]=useState(invisible)

    async function accedi(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        const storage = new Storage({
            name: "shopdb",
        });
        await storage.create();
        try {
            var formdata = new FormData();
            //add three variable to form
            formdata.append("email", email);
            formdata.append("password", password);
            const response = await axios.post(url, formdata);
            console.log(response.data);
            setEsito(response.data);
            if(response.data.esito){
              await storage.set("user", response.data.user);
              await storage.set("id", response.data.id);
              await storage.set("email", response.data.email);
              window.location.reload()
            }else{
                setAlert(visibile);
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    async function registrati(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        const storage = new Storage({
            name: "shopdb",
        });
        await storage.create();
        try {
            var formdata = new FormData();
            //add three variable to form
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("username",user);
            const response = await axios.post(urlR, formdata);
            console.log(response.data);
            setEsito(response.data);
            if(response.data.esito){
              await storage.set("user", response.data.user);
              await storage.set("id", response.data.id);
              await storage.set("email", response.data.email);
              window.location.reload()
            }else{
                setAlert(visibile);
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    if (registrazione) {
        return (
            <div className="container">
                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-black text-gray-900 ">
                            Registrati
                        </h2>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
                        <div>
                        <div className={alert} role="alert">
                            <span className="font-extrabold">Errore!</span> Email gia utilizzata
                        </div>
                        </div>
                            <form
                                className="space-y-6"
                                onSubmit={registrati}
                            >
                                <div>
                                    <label
                                        htmlFor="user"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="user"
                                            name="user"
                                            type="text"
                                            autoComplete="user"
                                            onChange={(event) =>
                                                setUser(event.target.value)
                                            }
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#28ba62] focus:border-[#28ba62] sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Indirizzo Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#28ba62] focus:border-[#28ba62] sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={(event) =>
                                                setPassword(event.target.value)
                                            }
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#28ba62] focus:border-[#28ba62] sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            required
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            Accetto la privacy policy
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Termini e condizioni
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2dd36f] hover:bg-[#28ba62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28ba62]"
                                    >
                                        Registrati
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            Oppure accedi
                                        </span>
                                    </div>
                                </div>
                                {/*
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#3b5998] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    
                    <IonIcon className='text-xl' icon={logoFacebook} />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#1DA1F2] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <IonIcon className='text-xl' icon={logoTwitter} />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#de5246] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <IonIcon className='text-xl' icon={logoGoogle} />
                  </a>
                </div>
  </div>*/}
                                <div>
                                    <button
                                        type="submit"
                                        className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2dd36f] hover:bg-[#28ba62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28ba62]"
                                        onClick={disabilitaRegistrazione}
                                    >
                                        Accedi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-black text-gray-900 tracking-tight">
                        Accedi 
                    </h2>
                </div>
                
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
                    <div>
                  <div className={alert} role="alert">
                    <span className="font-extrabold">Errore!</span> credenziali errate
                  </div>
                </div>
                        <form className="space-y-6" onSubmit={accedi}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Indirizzo Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#28ba62] focus:border-[#28ba62] sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#28ba62] focus:border-[#28ba62] sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                {/*<div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Ricordami
                                    </label>
                                    </div>*/}

                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Password dimenticata?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2dd36f] hover:bg-[#28ba62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28ba62]"
                                >
                                    Accedi
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Oppure registrati
                                    </span>
                                </div>
                            </div>
                            {/*
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#3b5998] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    
                    <IonIcon className='text-xl' icon={logoFacebook} />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#1DA1F2] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Twitter</span>
                    <IonIcon className='text-xl' icon={logoTwitter} />
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#de5246] hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <IonIcon className='text-xl' icon={logoGoogle} />
                  </a>
                </div>
  </div>*/}
                            <div>
                                <button
                                    type="submit"
                                    className="mt-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2dd36f] hover:bg-[#28ba62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#28ba62]"
                                    onClick={abilitaRegistrazione}
                                >
                                    Registrati
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotLogged;
