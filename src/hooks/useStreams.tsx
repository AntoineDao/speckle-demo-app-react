import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

type Props = {}

type Stream = {
  id: string,
  name: string,
  branches: {
    totalCount: number
  },
}

const GET_STREAMS = gql`
query GetStreams {
  streams{
    items {
      id
      name
      branches {
        totalCount
      }
    }
  }
}
`;


export const useStreams = ({ }: Props) => {
  const { loading, error, data } = useQuery(GET_STREAMS);

  const streams = useMemo(() => {
    if (data) {
      console.log(data)
      return data.streams.items as Stream[]
    }
    return []
  }, [data])

  return {
    streams,
    loading,
    error
  }
}