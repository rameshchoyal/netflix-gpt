import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removerUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removerUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute inset-x-0 top-0 bg-gradient-to-b  from-black py-2 px-8 z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-48 mx-auto md:mx-0 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex flex-wrap my-1 md:my-7 justify-between">
          {isShowGptSearch && (
            <select
              className="bg-gray-700 text-white px-1 rounded-lg mx-2 "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-700 text-white px-2 md:px-1 rounded-lg mx-2"
            onClick={toggleGptSearch}
          >
            {!isShowGptSearch ? "GPT Search" : "Homepage"}
          </button>
          <img
            className="hidden md:inline-block w-8 h-8 mx-2"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="text-white font-bold bg-red-500 px-2 md:px-1 rounded-lg mx-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
