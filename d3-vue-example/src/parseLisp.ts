const rules = [
    { type: 'space', regex: /^\s/ },
    { type: 'lParen', regex: /^\(/ },
    { type: 'rParen', regex: /^\)/ },
    { type: 'number', regex: /^[0-9\.]+/ },
    { type: 'string', regex: /^".*?"/ },
    { type: 'variable', regex: /^[^\s\(\)]+/ } // take from the beginning 1+ characters until you hit a ' ', '(', or ')' // TODO - support escaped double quote
];

type Rules = typeof rules;
type Tokenizer = ReturnType<typeof tokenizer>;


const tokenizer = (rules: Rules) => (input: string): {token: string, type: string, rest: string} => {
    for (let i = 0; i < rules.length; i += 1) {
        let tokenized = rules[i].regex.exec(input);
        if (tokenized) {
            return {
                token: tokenized[0],
                type: rules[i].type,
                rest: input.slice(tokenized[0].length)
            };
        }
    }

    throw new Error(`no matching tokenize rule for ${JSON.stringify(input)}`);
};


type LispAstM<T> = (string | T)[]


const parser = (tokenize: Tokenizer) => function parse(input: string, ast: string[] = [], parents: any[] = []): string[] {
    if (input === '') {
        return ast;
    }

    const { token, type, rest } = tokenize(input);

    if (type === 'space') {
        // do nothing
        return parse(rest, ast, parents);
    } else if (type === 'variable') {
        ast.push(token);
        return parse(rest, ast, parents);
    } else if (type === 'number') {
        // ast.push(Number(token));
        ast.push(token);
        return parse(rest, ast, parents);
    } else if (type === 'string') {
        ast.push(token.replace(/(^"|"$)/g, "'"));
        return parse(rest, ast, parents);
    } else if (type === 'lParen') {
        parents.push(ast)
        return parse(rest, [], parents)
    } else if (type === 'rParen') {
        const parentAst = parents.pop();
        if (parentAst) {
            parentAst.push(ast);
            return parse(rest, parentAst, parents);
        }
        return parse(rest, ast, parents);
    }

    throw new Error(`Missing parse logic for rule ${JSON.stringify(type)}`);
};


const parseLisp = (str: string) => parser(tokenizer(rules))(str);

export default parseLisp;
