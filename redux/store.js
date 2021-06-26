import { configureStore } from '@reduxjs/toolkit'
import times from 'redux/times'

export default configureStore({ reducer: times })