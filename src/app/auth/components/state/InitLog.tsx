"use client"

import { ILog, useLogStore } from '@/store';
import React, { useRef } from 'react'

const InitLog = ({ logs }: { logs: ILog[] }) => {
    const initRef = useRef<boolean>();

    const prepareLog = () => {
        const result: {
            [key: string]: ILog
        } = {}

        logs.forEach((log) => {
            result[log.date as string] = {...log, date: new Date(log.date)}
        })

        return result;
    }

    if(!initRef.current){
        useLogStore.setState({
            logs: prepareLog()
        })
        initRef.current =  true
    }

  return null;
}

export default InitLog