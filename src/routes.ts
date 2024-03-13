import { getLogIn } from "@controllers/login"
import { getMovies, postMovies } from "@controllers/movies"
import {
  getDeleteMovieById,
  getMovieById,
} from "@controllers/movies/moviesById"
import { getTODO, itsWorks } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/login", getLogIn)
  app.get("/movies", getMovies)
  app.post("/movies", postMovies)
  app.get("/movies/:id", getMovieById)
  app.delete("/movies/:id", getDeleteMovieById)
}
