// import {useDispatch, useSelector} from "react-redux";
// import {addTodos, setLoadingFalse, setLoadingTrue} from "../../redux/actionCreators";
// import {useEffect} from "react";
//
//
// const {todos, todosLoading} = useSelector(store => store.todosReducer);
// const dispach = useDispatch();
//
// const fetchTodos = async () => {
//     try {
//         dispach(setLoadingTrue())
//         const resp = await fetch('http://localhost:8888/get-todos')
//         const data = await resp.json()
//         dispach(addTodos(data))
//     }catch (e) {
//         console.log(e)
//     }finally {
//         dispach(setLoadingFalse())
//     }
//
// }
//
// useEffect(() => {
//     fetchTodos()
// }, [])