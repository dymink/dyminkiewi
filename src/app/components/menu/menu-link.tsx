import { Link, Text } from '@chakra-ui/react'

const MenuLink = (props:{ title: string, route: string }) => (
  
    <Link href={props.route} display={'block'} marginTop={'10px'}>{props.title}</Link>
  
)

export default MenuLink