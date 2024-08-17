const fs=require("fs").promises;class AsyncFile{static async read_file(e){try{return console.log(`✓ AsyncFile.read_file \t\t\t—▶ File ${e} has been read!`),await fs.readFile(e,"utf8")}catch(e){console.error("✕ AsyncFile.read_file \t\t\t—▶ Ups! Something went wrong!\n",e)}}static async rm(e){try{await fs.rm(e,{recursive:!0}),console.log(`✓ AsyncFile.rm \t\t\t—▶ ${e} deleted successfully!`)}catch(e){console.error("✕ AsyncFile.rm \t\t\t—▶ Ups! Something went wrong!\n",e)}}static async copy_file(e,t){try{await fs.copyFile(e,t),console.log(`✓ AsyncFile.copy_file \t\t\t—▶ File ${e} has been copied!`)}catch(e){console.error("✕ AsyncFile.copy_file \t\t\t—▶ There was a problem executing!\nAn error occurred while copying the file!\n",e)}}static async write_file(e,t){try{await fs.writeFile(e,t,"utf8"),console.log(`✓ AsyncFile.write_file \t\t\t—▶ File ${e} has been written!`)}catch(e){console.error("✕ AsyncFile.write_file \t\t\t—▶ There was a problem executing!\nAn error occurred while writing the file!\n",e)}}static async file_there(e){try{fs.access(e,fs.constants.F_OK,(()=>(err?console.error("✕ AsyncFile.file_there \t\t\t—▶ File is not there"):console.log(`✓ AsyncFile.file_there \t\t\t—▶ File ${e} is there!`),err)))}catch(e){console.error("✕ AsyncFile.file_there \t\t\t—▶ Ups! Something went wrong!\n",e)}}static async make_dir(e){try{await fs.mkdir(e,{recursive:!0}),console.log(`✓ AsyncFile.make_dir \t\t\t—▶ Directory ${e} has been created!`)}catch(e){console.error("✕ AsyncFile.make_dir \t\t\t—▶ There was a problem while running!\nAn error occurred while creating the folder.\n",e)}}static async read_dir(e){try{return console.log(`✓ AsyncFile.read_dir \t\t\t—▶ Directory ${e} has been read!`),await fs.readdir(e)}catch(e){console.error("✕ AsyncFile.read_dir \t\t\t—▶ There was a problem while running!\nAn error occurred while reading the directory.\n",e)}}static async read_json(e){try{const t=await AsyncFile.read_file(e);return console.log(`✓ AsyncFile.read_json \t\t\t—▶ File ${e} has been read!`),JSON.parse(t)}catch(e){console.error(`✕ AsyncFile.read_json \t\t\t—▶ Ups! Something went wrong on filer/AsyncFile.js\n${e}`)}}static async update_json(e,t){try{await fs.writeFile(e,JSON.stringify(t,null,2),"utf8"),console.log(`✓ AsyncFile.update_json \t\t\t—▶ Json File ${e} has been updated!`)}catch(e){console.error(`✕ AsyncFile.update_json \t\t\t—▶ Ups! Something went wrong!\n ${e}`)}}}module.exports=AsyncFile;