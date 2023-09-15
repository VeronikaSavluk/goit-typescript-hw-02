/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Title {
  title: string;
}

interface PageInfo extends Title {
  pageInfo:() => void;
}

class Component<T extends Title> {
  constructor (public props:T) {
  
  }
}

class Page extends Component<PageInfo> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}