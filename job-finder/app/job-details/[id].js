import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useCallback, useState } from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {
    const params = useSearchParams()
    const router = useRouter()

    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id})
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.lightWhite}}
        >
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={() => router.back()}
                    />
                )
            }}
            
            ></Stack.Screen>
        </SafeAreaView>
    )
}

export default JobDetails