import NextLink from 'next/link';
import { Link as MuiLink } from '@mui/material';

export default function Link(props) {
  return (
    <MuiLink as='span' {...props.mui}>
      <NextLink href={props.href} {...props.next} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        {props.children}
      </NextLink>
    </MuiLink>
  );
}
