import express from 'express';
import cors from 'cors';

import Routes from './routes';
import MakeResponse from './constants/base.response.js';
import { HttpStatusCode } from './constants/http.status.code.js';


/**
 * @desc Start Express server.
 * @class Server
 * @returns void
 */
 class ExpressServer {
	constructor(app) {
		this.app = app;
		
		this.config();
		
		this.starter();
		
		this.routes();
		
		this.unknownRoutes();

		this.handleError();
	};

	config() {
		// USE MIDDLEWARES
		this.app.use(cors());

		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		// SET APPLICATION PORT
		this.app.set("port", 8080);
	};

	initialize () {
		const message = "  App is running at http://localhost:%d in %s mode";
		  
		 this.app.listen(this.app.get('port'), () => {
		 
		  console.info(message, this.app.get("port"), this.app.get("env"));
		 
		  console.info("  **Press CTRL + C to stop**");
		});
		
	  };

	routes () {
		this.app.use('/api/v1', Routes.router);
	}

	unknownRoutes () {
		this.app.use('/*', (_, res) => {
			const result = MakeResponse.failure("Unknown Route", null, HttpStatusCode.NOT_FOUND);
			return res.status(404).json(result)
		});
	}

	handleError() {
		return this.app.use((err, _, res) => {
			const data = MakeResponse.error(err, err.message);
			if (!res.headersSent) return res.status(500).json(data);
		});
	};

	starter() {
		const data = { operationStatus: 'Successful!' };
		this.app.get('/', (_, res) => {
			const result = MakeResponse.success(data, "app is up and running!");
			return res.status(200).json(result);
		});
	}
}

export default new ExpressServer(express());