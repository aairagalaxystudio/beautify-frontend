import Link from "next/link"

export default function Header(){

return(

<header className="header">

<div className="logo">
Beautify by Mansi
</div>

<nav>
<Link href="/">Home</Link>
<Link href="/collection">Collection</Link>
</nav>

</header>

)

}