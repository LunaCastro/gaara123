import LottieVIew from "lottie-react-native"
import loading from "../../lottie/loading.json"
import React from "react"

export function Loading(){
    return <LottieVIew source={loading} autoPlay loop />
}