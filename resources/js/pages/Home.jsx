import DefaultContainer from '../components/common/layout/DefaultContainer'
import PageTitle from '../components/common/typography/PageTitle'
import React from 'react'
import Text from '../components/common/typography/Text'

export default function Home() {

    return (
        <DefaultContainer>

            <PageTitle>React With Laravel</PageTitle>
            <Text>This is the example home page.</Text>

        </DefaultContainer>
    )
}