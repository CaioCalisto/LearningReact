import { Typography } from '@/app/styled-components/typography/typography'
import React from 'react'

function CommodityView() {
  return (
    <div className='flex pl-2 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-20 pt-4'>
      
      {/* TITLE AND DESCRIPTION */}
      <div className='flex flex-col'>
        <Typography type='TITLE' size='S' weight='SEMIBOLD'>LPDE const fob US</Typography>
        <Typography type='BODY' size='M' weight='REGULAR'>Low density polyethylene (LPDE) | large volume transactions | contract price</Typography>
      </div>
      {/* END TITLE AND DESCRIPTION */}

      
    </div>
  )
}

export default CommodityView