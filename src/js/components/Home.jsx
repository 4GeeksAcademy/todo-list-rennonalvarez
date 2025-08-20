import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import AllList from "./AllList";


//create your first component




const Home = () => {
	return (
		<div className="text-center mt-4">
            <ul>

				<h1 className="titulo-tareas">Lista de Tarea</h1>
				<br />
				<br />
				<br />
				<AllList/>
			</ul>


		</div>
	);
};

export default Home;