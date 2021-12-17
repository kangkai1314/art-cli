#!/usr/bin/env node
console.log('mycli if working proper')
const program=require('commander')
const inquirer=require('inquirer')
const fs=require('fs')

program.command('create <name>').description('create a project').action(name=>{
    console.log('create '+name)
})

program.parse()

fs.writeFileSync()
const prompts=[{
    name:'features',
    message:'check the feature your project need,can choose both',
    pageSize:10,
    type:'checkbox',
    choices:[
        {
            name:'vue',
            value:'vue',
            description:'vue template'

        },
        {
           name:'react',
           value:'react',
        }
    ]
}]
inquirer.prompt(prompts).then(answer=>{
    console.log(answer)
})